import { Controller, Get, Query } from '@nestjs/common';
import { scrapGoogleScholar } from 'src/utils/scrapping/scrapping';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {

    constructor(private readonly searchService: SearchService) {}
    @Get('google-scholar')
    async getGoogleScholar(@Query('query') query: string, @Query('page') page: number = 0) {
        return await this.searchService.getGoogleScholar(query, page);
    }
}
