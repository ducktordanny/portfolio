import { useSlideUp } from 'jsx-styled/utils/util-animation-hooks';

const Footer = () => {
  useSlideUp('footer', 0.7);

  return (
    <footer className="mt-6 text-center text-white opacity-0 sm:pt-8">
      Copyright © 2023 Daniel Lazar.
    </footer>
  );
};

export default Footer;
