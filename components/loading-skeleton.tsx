export function LoadingSkeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-muted rounded ${className}`} />
}

export function CardSkeleton() {
  return (
    <div className="p-6 space-y-4 border rounded-lg">
      <LoadingSkeleton className="h-12 w-12 rounded-lg" />
      <LoadingSkeleton className="h-4 w-3/4" />
      <LoadingSkeleton className="h-3 w-full" />
      <LoadingSkeleton className="h-3 w-2/3" />
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="section-spacing">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <LoadingSkeleton className="h-4 w-32 mx-auto" />
            <LoadingSkeleton className="h-16 w-full max-w-2xl mx-auto" />
            <LoadingSkeleton className="h-6 w-3/4 mx-auto" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LoadingSkeleton className="h-12 w-32" />
            <LoadingSkeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}
