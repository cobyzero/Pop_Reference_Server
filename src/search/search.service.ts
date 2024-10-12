import { Injectable } from '@nestjs/common';
import {
  scrapGoogleScholar,
  scrapProquest,
  scrapScielo,
} from 'src/utils/scrapping/scrapping';

@Injectable()
export class SearchService {
  async getGoogleScholar(query: string, page: number = 0) {
    return await scrapGoogleScholar(query, page);
  }

  async getProquest(query: string, page: number = 0) {
    return await scrapProquest(query, page);
  }

  async getScielo(query: string, page: number = 0) {
    return await scrapScielo(query, page);
  }
}
