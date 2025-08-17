export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-primary font-mono mb-2">Rakesh Biswal</div>
            <p className="text-sm text-muted-foreground">Full Stack Developer & Tech Enthusiast</p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Back to Top
            </a>
            <div className="text-sm text-muted-foreground">© 2024 Rakesh Biswal. All rights reserved.</div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using Next.js, Tailwind CSS, and lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
