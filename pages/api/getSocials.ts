import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanaty';
import { Social } from '../../typings';

const query = groq`
    *[_type == "social"]
`

type data = {
    social: Social[]

}

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const social: Social[] = await sanityClient.fetch(query)
    res.status(200).json({ social })
  }
