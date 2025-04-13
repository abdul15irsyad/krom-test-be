import { faker } from '@faker-js/faker';
import { Database } from '.';
import { applicants, roles, status } from '../schema';

export const applicantSeed = async (db: Database) => {
  const applicationRoles = await db.select().from(roles);
  const statuses = await db.select().from(status);

  const newApplicants = [
    {
      name: 'Ethan Robinson',
      email: 'ethan.robinson@email.com',
      phoneNumber: '+272112345678',
      yearsOfExperience: 6,
      appliedRoleId: applicationRoles.find(
        ({ name }) => name === 'System Architect',
      )!.id,
      applicationStatusId: statuses.find(
        ({ name }) => name === 'Candidate Rejected',
      )!.id,
      location: 'South Africa',
      resumeURL:
        'https://drive.google.com/file/d/1v75YY4npJG-Qx6NLgRFgR-HQKNHXiya8/view?usp=sharing',
    },
  ];

  const newApplicantLength = newApplicants.length;
  for (let i = 0; i < 50 - newApplicantLength; i++) {
    const fullname = faker.person.fullName();
    const email = faker.internet.email({
      firstName: fullname.split(' ')[0],
      lastName: fullname.split(' ')[1],
    });
    newApplicants.push({
      name: fullname,
      email: email.toLowerCase(),
      phoneNumber: faker.phone.number({ style: 'international' }),
      yearsOfExperience: faker.number.int({ min: 1, max: 12 }),
      appliedRoleId: faker.helpers.arrayElement(applicationRoles).id,
      applicationStatusId: faker.helpers.arrayElement(statuses).id,
      location: faker.helpers.arrayElement([
        'South Africa',
        'Germany',
        'USA',
        'Indonesia',
        'Singapore',
      ]),
      resumeURL: faker.helpers.arrayElement([
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        'https://drive.google.com/file/d/1v75YY4npJG-Qx6NLgRFgR-HQKNHXiya8/view?usp=sharing',
      ]),
    });
  }

  await db.insert(applicants).values(
    newApplicants.map((newApplicant) => {
      const randomAt = faker.date.past({
        years: 5,
      });
      return {
        ...newApplicant,
        createdAt: randomAt,
        updatedAt: randomAt,
      };
    }),
  );
};
