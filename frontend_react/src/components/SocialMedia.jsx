import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaLinkedin, FaGitlab, FaItchIo } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://www.linkedin.com/in/frederikoadr/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a href="https://github.com/frederikoadr" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </div>
        <div>
          <a href="https://adriian.itch.io/" target="_blank" rel="noopener noreferrer">
            <FaItchIo />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia