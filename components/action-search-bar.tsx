"use client"

import type React from "react"

import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Search, TvIcon as TvMinimal, Store, BookOpen, Origami, Terminal, Copy, Check, RotateCcw } from "lucide-react"
import useDebounce from "@/hooks/use-debounce"

interface Action {
  id: string
  label: string
  icon: React.ReactNode
  description?: string
  end?: string
  command?: string
}

interface SearchResult {
  actions: Action[]
}

const allActions: Action[] = [
  {
    id: "1",
    label: "Frontend",
    icon: <TvMinimal className="h-6 w-6 text-blue-500" />,
    description: "UI/UX",
    end: "Start your project",
    command: "npx simpli-frontend my-project",
  },
  {
    id: "2",
    label: "Marketplace",
    icon: <Store className="h-6 w-6 text-green-500" />,
    description: "Shop",
    end: "Marketplace starter",
    command: "npx simpli-marketplacev1 my-new-project",
  },
  {
    id: "3",
    label: "Docs",
    icon: <BookOpen className="h-6 w-6 text-orange-500" />,
    description: "Documentation",
    end: "Docs Starter",
    command: "npx simpli-docsv1 my-docs-project",
  },
]

function ActionSearchBar({ 
  actions = allActions,
  setIsSearchOpen
}: { 
  actions?: Action[],
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>
}) {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<SearchResult | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [selectedAction, setSelectedAction] = useState<Action | null>(null)
  const [isCopied, setIsCopied] = useState(false)
  const debouncedQuery = useDebounce(query, 200)

  const handleRestart = () => {
    setQuery("")
    setResult(null)
    setSelectedAction(null)
    setIsFocused(true)
  }

  // Effect to update search results
  useEffect(() => {
    if (!isFocused) {
      setResult(null)
      return
    }

    if (!debouncedQuery) {
      setResult({ actions: allActions })
    } else {
      const normalizedQuery = debouncedQuery.toLowerCase().trim()
      const filteredActions = allActions.filter((action) => {
        const searchableText = action.label.toLowerCase()
        return searchableText.includes(normalizedQuery)
      })

      setResult({ actions: filteredActions })
    }
  }, [debouncedQuery, isFocused])

  // Separate effect to update parent component about search open state
  useEffect(() => {
    if (!isFocused) {
      setIsSearchOpen(false)
      return
    }
    
    // If a CLI is selected, we need more space
    if (selectedAction) {
      setIsSearchOpen(true)
    } else {
      setIsSearchOpen(isFocused && (result?.actions.length ?? 0) > 0)
    }
  }, [isFocused, result, setIsSearchOpen, selectedAction])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setIsTyping(true)
    setSelectedAction(null)
  }

  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          duration: 0.4,
        },
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  }

  const handleFocus = () => {
    setIsFocused(true)
    if (!query) {
      setResult({ actions: allActions })
    }
  }

  const handleActionClick = (action: Action) => {
    setSelectedAction(action)
    setQuery(action.label)
    // Keep focus active to maintain the open state
    setIsFocused(true)
  }

  const handleCopy = async () => {
    if (selectedAction && selectedAction.command) {
      await navigator.clipboard.writeText(selectedAction.command)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex flex-col justify-start items-center min-h-[250px]">
        <div className="w-full max-w-xl sticky top-0 bg-background z-10 pt-6 pb-3">
          <label
            className="text-base font-medium text-gray-500 dark:text-gray-400 mb-3 block flex items-center gap-2"
            htmlFor="search"
          >
            Search Simpli CLIs
            <Origami className="h-5 w-5 text-gray-400" />
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Frontend, Marketplace, or Docs"
              value={query}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="pl-5 pr-24 py-3 h-14 text-lg rounded-lg focus-visible:ring-offset-0"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-3">
              <AnimatePresence mode="popLayout">
                {query.length > 0 ? (
                  <motion.button
                    key="restart"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleRestart}
                    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Restart search"
                  >
                    <RotateCcw className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                  </motion.button>
                ) : (
                  <Search className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {selectedAction && selectedAction.command && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.2,
              ease: "linear"
            }}
            className="w-full max-w-xl mt-4 mb-10 bg-gray-100 dark:bg-gray-800 rounded-lg p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-grow overflow-x-auto">
                <Terminal className="h-6 w-6 flex-shrink-0 text-gray-500" />
                <code className="text-lg font-mono whitespace-nowrap">{selectedAction.command}</code>
              </div>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Copy command"
              >
                {isCopied ? <Check className="h-6 w-6 text-green-500" /> : <Copy className="h-6 w-6 text-gray-500" />}
              </button>
            </div>
          </motion.div>
        )}

        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {isFocused && result && !selectedAction && (
              <motion.div
                className="w-full border rounded-md shadow-sm overflow-hidden dark:border-gray-800 bg-white dark:bg-black mt-3"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
              >
                <motion.ul>
                  {result.actions.map((action) => (
                    <motion.li
                      key={action.id}
                      className="px-5 py-4 flex items-center justify-between hover:bg-gray-200 dark:hover:bg-zinc-900 cursor-pointer rounded-md"
                      variants={item}
                      layout
                      onClick={() => handleActionClick(action)}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500">{action.icon}</span>
                        <span className="text-lg font-medium text-gray-900 dark:text-gray-100">{action.label}</span>
                        <span className="text-base text-gray-400">{action.description}</span>
                      </div>
                      <div className="text-base text-gray-400 text-right">{action.end}</div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ActionSearchBar

