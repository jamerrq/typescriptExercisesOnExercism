interface TeamResult {
  win: number;
  draw: number;
  loss: number;
}

class Team {
  private name: string;
  private result: TeamResult;
  private matchesPlayed: number;
  constructor(name: string) {
    this.name = name;
    this.result = {
      win: 0,
      draw: 0,
      loss: 0,
    };
    this.matchesPlayed = 0;
  }
  public get points(): number {
    return this.result.win * 3 + this.result.draw;
  }
  public get strName(): string {
    return this.name;
  }
  public addMatch(result: string): void {
    switch (result) {
      case 'win':
        this.result.win++;
        break;
      case 'draw':
        this.result.draw++;
        break;
      case 'loss':
        this.result.loss++;
        break;
      default:
        throw new Error('Invalid result');
    }
    this.matchesPlayed++;
  }
  public toString(): string {
    const { name, matchesPlayed, result } = this;
    const { win, draw, loss } = result;
    return `${name.padEnd(31)}|  ${matchesPlayed} |  ${win} |  ${draw} |  ${loss} | ${String(this.points).padStart(2)}`;
  }
}

export class Tournament {
  // eslint-disable-next-line no-unused-vars
  public tally(matches: string): string {
    const header = 'Team                           | MP |  W |  D |  L |  P';
    if (matches === '') {
      return header;
    }
    const teams = new Map<string, Team>();
    const matchResults = matches.split('\n');
    matchResults.forEach((matchResult) => {
      const [team1, team2, result] = matchResult.split(';');
      if (!teams.has(team1)) {
        teams.set(team1, new Team(team1));
      }
      if (!teams.has(team2)) {
        teams.set(team2, new Team(team2));
      }
      teams.get(team1)?.addMatch(result);
      teams.get(team2)?.addMatch(result === 'win' ? 'loss' : result === 'loss' ? 'win' : 'draw');
    });
    // sort by points, then by name
    const sortedTeams = [...teams.values()].sort((a, b) => {
      if (a.points !== b.points) {
        return b.points - a.points;
      }
      return a.strName.localeCompare(b.strName);
    });
    const teamResults = sortedTeams.map((team) => team.toString());
    return [header, ...teamResults].join('\n');
  }
}


console.log(new Tournament().tally(''))
