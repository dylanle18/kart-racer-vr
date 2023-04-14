function Footer() {
  return (
    <div className="flex flex-col justify-center items-center py-4 bg-black text-sm w-full text-white absolute bottom-0">
      <p className="font-bold">Made with ❤️</p>
      <p>© 2023 Dylan Le, Igor Goncalves Penedoss</p>

      <p className="font-bold mt-4">LinkedIn</p>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/dylanle18/"
          target="_blank"
          className="underline"
        >
          Dylan
        </a>
        <a
          href="https://www.linkedin.com/in/igor-penedos-9650261b0/"
          target="_blank"
          className="underline"
        >
          Igor
        </a>
      </div>

      <p className="font-bold mt-4">GitHub</p>
      <a
        href="https://github.com/igorpenedos/CPS643-Final-Project"
        target="_blank"
        className="underline"
      >
        View Code
      </a>
    </div>
  );
}

export default Footer;
