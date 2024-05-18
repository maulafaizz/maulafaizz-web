import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="flex flex-col text-center p-24 bg-black">
      <div>
        <p>Hi, I&apos;m Maula</p>
        <br></br>
        <p className="text-justify lg:text-center">Software engineer with 4+ years experience. I&apos;ve worked with various tech stack and language from python, go, and mainly java.</p>
      </div>
      <div className="mt-6">
        <p>Let&apos;s get in touch!</p>
        <div className="flex flex-row justify-center gap-4 mt-4">
          <a href="https://x.com/maulafaizz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fa-3x" icon={ faXTwitter } />
          </a>
          <a href="https://github.com/maulafaizz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="fa-3x" icon={ faGithub } />
          </a>
        </div>
      </div>
    </main>
  );
}
