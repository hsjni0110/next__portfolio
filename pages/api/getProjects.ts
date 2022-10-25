import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanaty';
import { Project } from '../../typings';

const query = groq`
    *[_type == "project"] {
    ...,
    technologies[]->
    }
`;

type data = {
    project: Project[]

}

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const project: Project[] = await sanityClient.fetch(query)
    res.status(200).json({ project })
  }
