import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanaty';
import { Skill } from '../../typings';

const query = groq`
    *[_type == "skill"]
`

type data = {
    skill: Skill[]

}

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const skill:Skill[] = await sanityClient.fetch(query)
    res.status(200).json({ skill })
  }