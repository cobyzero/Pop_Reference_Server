import { Injectable } from '@nestjs/common';
import { scrapGoogleScholar } from 'src/utils/scrapping/scrapping';

@Injectable()
export class SearchService {

    async getGoogleScholar(query: string, page: number = 0) {
        return await scrapGoogleScholar(query, page);
    }
}
