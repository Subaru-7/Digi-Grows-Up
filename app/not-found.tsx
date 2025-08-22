import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container section-spacing">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="mb-4">404</h1>
          <h2 className="mb-6">Page Not Found</h2>
          <p className="body-large mb-8 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
