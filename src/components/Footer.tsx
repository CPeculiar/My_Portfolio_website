
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Peculiar Chukwudi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
