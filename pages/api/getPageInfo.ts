import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanaty';
import { PageInfo } from '../../typings';

const query = groq`
    *[_type == "pageInfo"][0]
`;

type data = {
    pageInfo: PageInfo[]

}

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const pageInfo: PageInfo[] = await sanityClient.fetch(query)
    res.status(200).json({ pageInfo })
  }
