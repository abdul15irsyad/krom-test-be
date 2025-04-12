import { roles } from '../schema';
import { Database } from '.';

export const roleSeed = async (db: Database) => {
  await db.insert(roles).values([
    {
      id: '21b702be-f12a-44b2-892f-5193413b3be3',
      name: 'System Architect',
      slug: 'system-architect',
    },
    {
      id: 'af2953f0-736e-4537-9ddc-64efac700202',
      name: 'Project Manager',
      slug: 'project-manager',
    },
    {
      id: 'd0f65c35-a1da-44ae-9c36-5db4c82e645c',
      name: 'Product Manager',
      slug: 'product-manager',
    },
    {
      id: 'a5a24dd6-e4dd-4183-a343-1bf54cd8326e',
      name: 'QA Engineer',
      slug: 'qa-engineer',
    },
    {
      id: '8a6cf08c-e631-41a0-8364-9cc47aa29c1b',
      name: 'Data Engineer',
      slug: 'data-engineer',
    },
    {
      id: '33a20e9f-d8ed-4385-9c07-08d091c4095d',
      name: 'Fullstack Developer',
      slug: 'fullstack-developer',
    },
    {
      id: '39d1f316-f29c-41ba-91be-c30e33417183',
      name: 'DevOps Engineer',
      slug: 'dev-ops-engineer',
    },
    {
      id: '15d0f349-eaae-4276-a15e-617cd1aa2faf',
      name: 'Backend Developer',
      slug: 'backend-developer',
    },
    {
      id: 'b226d25d-315d-44c8-84ee-37a7de16a0ff',
      name: 'UX Designer',
      slug: 'ux-designer',
    },
    {
      id: '848041f6-8b83-45d3-bb78-bc0af049e045',
      name: 'Frontend Developer',
      slug: 'frontend-developer',
    },
    {
      id: 'a7051b85-2d6c-4663-ada2-deafbc4cd18f',
      name: 'System Administration',
      slug: 'system-administration',
    },
    {
      id: '917f9757-b89b-46a3-ae00-7dfb3af598d8',
      name: 'Data Scientist',
      slug: 'data-scientist',
    },
    {
      id: 'b3c76b6f-bb74-42eb-b385-6d16b75fcbd7',
      name: 'Data Analyst',
      slug: 'data-analyst',
    },
    {
      id: '39606fb8-4822-444d-a93b-387e99851f4d',
      name: 'Software Developer',
      slug: 'software-developer',
    },
  ]);
};
