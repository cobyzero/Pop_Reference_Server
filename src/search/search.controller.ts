import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  @Get()
  async getGoogleScholar(
    @Query('query') query: string,
    @Query('page') page: number = 0,
  ) {
    const google = await this.searchService.getGoogleScholar(query, page);
    const proquest = await this.searchService.getProquest(query, page);
    const scielo = await this.searchService.getScielo(query, page);
    return { google, proquest, scielo };
  }
}
