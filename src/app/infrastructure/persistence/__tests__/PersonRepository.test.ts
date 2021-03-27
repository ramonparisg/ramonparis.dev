import createMockInstance from "jest-create-mock-instance";
import PersonRepository from "@infrastructure/persistence/PersonRepository";
import PersonDao from "@infrastructure/persistence/dao/PersonDao";

describe("Test findById", function () {
  let personRepository: PersonRepository;
  let personDaoMock: jest.Mocked<PersonDao>;

  beforeEach(() => {
    personDaoMock = createMockInstance(PersonDao);
    personRepository = new PersonRepository(personDaoMock);
    jest.clearAllMocks();
  });

  test("Person not found then return promise with null resolve", async () => {
    // GIVEN
    const id = "1";
    personDaoMock.findById.mockResolvedValue(null);

    // WHEN
    const response = await personRepository.findById(id);

    // THEN
    expect(response).toBeNull();
    expect(personDaoMock.findById).toBeCalledTimes(1);
  });

  test("Person found then return domain object", async () => {
    //GIVEN
    const id = "1";
    const resolvedValue = {
      birthdate: undefined,
      currentLocation: "",
      description: "",
      firstName: "",
      knowledge: undefined,
      id: "",
      jobs: undefined,
      lastName: "",
      profilePicUrl: "",
      projects: undefined,
      socialMedias: undefined,
      study: { books: undefined, courses: undefined, university: undefined },
      title: "",
    };
    personDaoMock.findById.mockResolvedValue(resolvedValue);

    // WHEN
    const response = await personRepository.findById(id);

    // THEN
    expect(response).not.toBeNull();
    expect(personDaoMock.findById).toBeCalledTimes(1);
  });
});
