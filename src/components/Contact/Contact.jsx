import {FaFacebook, FaMailchimp, FaGithub, FaTwitter} from 'react-icons/fa'
import { SocialCard, GridSocial } from './StylesContact'

function Contact() {
  return (
    <GridSocial>
        <SocialCard
        CardBg='Linkedin'
        >
            <a href="">
            <FaFacebook
            color='white'
            size={50}
            />
            </a>
        </SocialCard>
        <SocialCard
        CardBg="Gmail"
        >
            <a href="">
            <FaMailchimp
            color='white'
            size={50}
            
            />
            </a>
        </SocialCard>
        <SocialCard
          CardBg="Github"
        >
            <a href="">
            <FaGithub
            color='white'
            size={50}
            />
            </a>
        </SocialCard>
        <SocialCard
          CardBg="Twitter"
        >
            <a href="">
            <FaTwitter
            color='black'
            size={50}
            />
            </a>
        </SocialCard>
    </GridSocial>
  )
}

export default Contact