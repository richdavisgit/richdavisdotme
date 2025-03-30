import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/IMG_6464.JPEG"
          alt="me n cleo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            That's me n cleo.
          </li>
          <li className="tracking-[-.01em]">
            I love cleo.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://www.google.com/search?q=dogs&sca_esv=23ddc62238eacc6b&udm=2&biw=1760&bih=849&ei=YKvoZ5qYLZn_ptQP2s7g-Qo&ved=0ahUKEwiayJOI4LCMAxWZv4kEHVonOK8Q4dUDCBE&uact=5&oq=dogs&gs_lp=EgNpbWciBGRvZ3MyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgwQABiABBhDGIoFGAoyCBAAGIAEGLEDMgUQABiABDIKEAAYgAQYQxiKBUipB1C3A1i8BnABeACQAQCYAT6gAeoBqgEBNLgBA8gBAPgBAZgCBaACgALCAgYQABgHGB7CAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBmAMAiAYBkgcBNaAHwhM&sclient=img"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Buton
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://www.google.com/search?q=cats&sca_esv=23ddc62238eacc6b&udm=2&biw=1760&bih=849&ei=XavoZ7aCM668ptQP7pLtgQs&ved=0ahUKEwj2pOKG4LCMAxUunokEHW5JO7AQ4dUDCBE&uact=5&oq=cats&gs_lp=EgNpbWciBGNhdHMyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyEBAAGIAEGLEDGEMYgwEYigUyChAAGIAEGEMYigUyCBAAGIAEGLEDMgwQABiABBhDGIoFGAoyChAAGIAEGEMYigUyChAAGIAEGEMYigVIqwpQhARYhARwAXgAkAEAmAFGoAFGqgEBMbgBA8gBAPgBAZgCAqACT8ICBhAAGAcYHpgDAIgGAZIHATKgB4sF&sclient=img"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buton 2
          </a>
        </div>
      </main>
    </div>
  );
}
/*<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>*/
