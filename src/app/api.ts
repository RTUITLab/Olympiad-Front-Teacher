import { environment } from 'src/environments/environment';
/*import { LanguageConverter } from './models/Language/LanguageConverter';
import { SolutionViewModel } from './models/Solutions/SolutionViewModel';*/

export class Api {
  private static baseUrl = environment.baseUrl;

  public static getMe(): string {
    return `${this.baseUrl}/api/auth/getme`;
  }
}