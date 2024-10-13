import { Injectable } from '@nestjs/common';
import { scrapGoogleScholar, scrapScielo } from 'src/utils/scrapping/scrapping';

@Injectable()
export class SearchService {
  async getGoogleScholar(
    query: string,
    page: number = 0,
    secureMode: boolean = true,
  ) {
    return await scrapGoogleScholar(query, page, secureMode);
  }

  async getScielo(query: string, page: number = 0, secureMode: boolean = true) {
    return await scrapScielo(query, page, secureMode);
  }
}
