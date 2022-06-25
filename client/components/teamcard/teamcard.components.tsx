import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Teamcard = () => {
  return (
    <div className='TeamsCard'>
   
    <div className='teamcard-division'>
        <div className="team-player">
        <Image src="/niki.png" alt="Niki" className='member' width={150} height={150} />
        <h1>Barat Nikhita</h1>
        <div className='socials'>
        <Link href="https://github.com/nikhitaBarat/">
            <div className='social-icon'>
            <Image src="/github.png" alt='GitHub'  width={32} height={32}/>
            </div>
        </Link>
        <Link href="https://www.linkedin.com/in/nikhita-barat/">
            <div className='social-icon'>
            <Image src="/linkedin.png" alt='LinkedIn'  width={32} height={32}/>
            </div>
        </Link>
        </div>
        </div>
    </div>

    <div className='teamcard-division'>
        <div className="team-player">
        <Image src="/siddhu.png" alt="Siddhu" className='member' width={150} height={150} />
        <h1>Siddhant Prateek</h1>
        <div className='socials'>
        <Link href="https://github.com/siddhantprateek">
            <div className='social-icon'>
            <Image src="/github.png" alt='GitHub'  width={32} height={32}/>
            </div>
        </Link>
        <Link href="https://www.linkedin.com/in/siddhantprateek/">
            <div className='social-icon'>
            <Image src="/linkedin.png" alt='LinkedIn'  width={32} height={32}/>
            </div>
        </Link>
        </div>
        </div>
    </div>

    <div className='teamcard-division'>
        <div className="team-player">
        <Image src="/suvii.png" alt="Suvii" className='member' width={150} height={150} />
        <h1>Suvangi Paul</h1>
        <div className='socials'>
        <Link href="https://github.com/suvangipaul">
            <div className='social-icon'>
            <Image src="/github.png" alt='GitHub'  width={32} height={32}/>
            </div>
        </Link>
        <Link href="https://www.linkedin.com/in/suvangi-p-705955209/">
            <div className='social-icon'>
            <Image src="/linkedin.png" alt='LinkedIn'  width={32} height={32}/>
            </div>
        </Link>
        </div>
        </div>
    </div>

   

  
    </div>
  );
};

export default Teamcard;