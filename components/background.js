import Image from 'next/image'
import ViewSource from '../components/view-source'
import { bgWrap, bgText } from '../styles/styles.module.css'

const Background = () => (
    <div>
        <ViewSource pathname="pages/background.js" />
        <div className={bgWrap}>
            <Image
                alt="Setup"
                src="/setup.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </div>

    </div>
)

export default Background