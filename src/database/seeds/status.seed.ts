import { status } from '../schema';
import { Database } from '.';

export const statusSeed = async (db: Database) => {
  await db.insert(status).values([
    {
      id: '59128767-4e7b-44d0-8e86-e9268ddbd284',
      name: 'Candidate Rejected',
      slug: 'candidate-rejected',
    },
    {
      id: 'f9910df3-8350-4d7f-8d57-f49bf13920cb',
      name: 'Offer Accepted',
      slug: 'offer-accepted',
    },
    {
      id: '28d2ca73-824b-4440-b167-af539ca0732e',
      name: 'Interview Done',
      slug: 'interview-done',
    },
    {
      id: '8ccb99da-9229-44da-97a4-76d0204356fc',
      name: 'Applied',
      slug: 'applied',
    },
    {
      id: '47c6eeb8-dc41-43e0-bb4e-4d41a97cf336',
      name: 'Contacted',
      slug: 'contacted',
    },
    {
      id: '1a7a6d2a-8517-407f-8ccb-9d0a6595fea9',
      name: 'Offer Rejected',
      slug: 'offer-rejected',
    },
    {
      id: '9cd254da-6d1f-46e9-a5c2-e0f229898963',
      name: 'Hired',
      slug: 'hired',
    },
    {
      id: '6747f49f-7be6-43a6-8a6e-95f9006419b3',
      name: 'Offer Made',
      slug: 'offer-made',
    },
    {
      id: 'd415df22-a91e-4aac-8874-71b5ddffd965',
      name: 'Interview Scheduled',
      slug: 'interview-scheduled',
    },
  ]);
};
