"use client"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

interface ScrollToTopButtonProps {
  showScrollTop: boolean
  scrollToTop: () => void
}

export function ScrollToTopButton({ showScrollTop, scrollToTop }: ScrollToTopButtonProps) {
  return (
    <>
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-none bg-gradient-to-r from-primary to-[hsl(210_80%_50%)] hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
          size="sm"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </>
  )
}
