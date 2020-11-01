import { environment } from 'src/environments/environment';
/*import { LanguageConverter } from './models/Language/LanguageConverter';
import { SolutionViewModel } from './models/Solutions/SolutionViewModel';*/

export class Api {
  private static baseUrl = environment.baseUrl;

  public static getMe(): string {
    return `${this.baseUrl}/api/auth/getme`;
  }

  public static getCoursesList(): string {
    return `${this.baseUrl}/api/courses`;
  }

  public static getCourse(id: string): string {
    return `${this.baseUrl}/api/courses?courseId=${id}`;
  }
}