import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanaty';
import { Experience, Project } from '../../typings';

const query = groq`
    *[_type == "experience"] {
    ...,
    technologies[]->
    }
`;

type data = {
    experiences: Experience[]

}

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const experiences: Experience[] = await sanityClient.fetch(query)
    res.status(200).json({ experiences })
  }
