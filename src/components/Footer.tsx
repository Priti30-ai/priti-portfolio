const Footer = () => (
  <footer className="bg-background border-t border-border mt-auto">
    <div className="container mx-auto py-8 flex justify-center items-center">
      <p className="text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} Priti. Built with passion & interest in technology.
      </p>
    </div>
  </footer>
);

export default Footer;