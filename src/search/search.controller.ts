import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  @Get()
  async getGoogleScholar(
    @Query('query') query: string,
    @Query('page') page: number = 0,
    @Query('google') google: string = 'true',
    @Query('scielo') scielo: string = 'true',
    @Query('secureMode') secureMode: boolean = true,
  ) {
    const dataGoogle =
      google === 'true'
        ? await this.searchService.getGoogleScholar(query, page, secureMode)
        : {
            results: [],
            totalResults: 0,
            currentPage: 0,
          };

    const dataScielo =
      scielo === 'true'
        ? await this.searchService.getScielo(query, page, secureMode)
        : {
            results: [],
            totalResults: 0,
            currentPage: 0,
          };

    return {
      results: [...dataGoogle.results, ...dataScielo.results].sort((a, b) =>
        a.year.localeCompare(b.year),
      ),
      totals: {
        google: dataGoogle.totalResults,
        scielo: dataScielo.totalResults,
      },
      currentPage: page,
    };
  }
}
