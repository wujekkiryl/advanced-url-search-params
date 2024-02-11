# AdvancedUrlSearchParams

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

AdvancedUrlSearchParams is a TypeScript class that facilitates the parsing and extraction of filtering, pagination, and sorting information from URL search parameters.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use AdvancedUrlSearchParams in your project, you can install it via npm:

```bash
npm install advanced-url-search-params
```

## Usage

```typescript
import { AdvancedUrlSearchParams } from "advanced-url-search-params";

const searchParamsString = "page=1&size=10&column=name&direction=asc&filter=name:contains:john";

const urlSearchParams = new AdvancedUrlSearchParams(searchParamsString);

// Accessing parsed values
const pagination = urlSearchParams.pagination;
const sorting = urlSearchParams.sorting;
const filters = urlSearchParams.filters;
```

## Examples

Here are some examples demonstrating how to use AdvancedUrlSearchParams:

### Basic Usage

```typescript
import { AdvancedUrlSearchParams } from "advanced-url-search-params";

const searchParamsString = "page=1&size=10&column=name&direction=asc&filter=name:contains:john";

const urlSearchParams = new AdvancedUrlSearchParams(searchParamsString);

console.log(urlSearchParams.pagination); // { page: 1, size: 10 }
console.log(urlSearchParams.sorting); // [{ column: 'name', direction: 'asc' }]
console.log(urlSearchParams.filters); // [{ column: 'name', value: 'john', rule: 'contains' }]
```

## API

### `AdvancedUrlSearchParams`

#### Constructor

- `new AdvancedUrlSearchParams(searchParams: string): AdvancedUrlSearchParams`

  Creates an instance of AdvancedUrlSearchParams by parsing the provided search parameters.

#### Properties

- `pagination: Pagination`

  Gets the pagination information from the URL search parameters.

- `sorting: Sorting[]`

  Gets the sorting information from the URL search parameters.

- `filters: Filter[]`

  Gets the filter information from the URL search parameters.

### `Pagination`

- `page?: number`

  The current page number.

- `size?: number`

  The number of items per page.

### `Sorting`

- `column: string`

  The column to sort by.

- `direction: SortingDirection`

  The sorting direction (enum).

### `Filter`

- `column: string`

  The column to filter by.

- `value: string`

  The value to filter.

- `rule: FilterRule`

  The filter rule (enum).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
