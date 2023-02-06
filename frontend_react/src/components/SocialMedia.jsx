import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { FaLinkedin, FaGitlab } from 'react-icons/fa'

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
          <a href="https://gitlab.com/frederikoadr" target="_blank" rel="noopener noreferrer">
            <FaGitlab />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia