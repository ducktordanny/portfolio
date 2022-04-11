import useSlideUp from '../hooks/useSlideUp';

const Footer = () => {
  useSlideUp('footer', 0.7);

  return (
    <footer className="mt-6 text-center text-white opacity-0 sm:pt-8">
      Copyright © 2022 Daniel Lazar.
    </footer>
  );
};

export default Footer;
