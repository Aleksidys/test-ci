import Team from '../Set';
import Character from '../craracter';
import ErrorRepository from '../Map';


describe('Team', () => {
  it('should add a character to the team', () => {
    const team = new Team();
    team.add('Character1');
    expect(team.members.size).toBe(1);
  });

  it('should throw an error when adding an existing character to the team', () => {
    const team = new Team();
    team.add('Character1');
    expect(() => {
      team.add('Character1');
    }).toThrowError('Персонаж уже есть в команде.');
  });

  it('should add multiple characters to the team', () => {
    const team = new Team();
    team.addAll('Character1', 'Character2', 'Character3');
    expect(team.members.size).toBe(3);
  });

  it('should return an array of team members', () => {
    const team = new Team();
    team.addAll('Character1', 'Character2', 'Character3');
    expect(team.toArray()).toEqual(['Character1', 'Character2', 'Character3']);
  });
});

describe('ErrorRepository', () => {
  it('should add error to the repository', () => {
    const errorRepo = new ErrorRepository();
    errorRepo.addError(404, 'Not Found');
    expect(errorRepo.errorMap.size).toBe(1);
  });

  it('should translate error code to description', () => {
    const errorRepo = new ErrorRepository();
    errorRepo.addError(404, 'Not Found');
    errorRepo.addError(500, 'Internal Server Error');
    expect(errorRepo.translate(404)).toBe('Not Found');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
  });

  it('should return "Unknown error" for unknown error code', () => {
    const errorRepo = new ErrorRepository();
    expect(errorRepo.translate(403)).toBe('Unknown error');
  });
});
