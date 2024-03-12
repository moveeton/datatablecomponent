# Data Table Component

The Data Table Component is a lightweight JavaScript package for generating HTML data tables from structured data.

## Installation

You can install the Data Table Component package via npm:

```bash
npm install data-table-component
```

## Usage

```javascript
const DataTableComponent = require('data-table-component');

// Sample data
const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Alice Johnson', age: 35 }
];

// Define table columns
const columns = [
  { label: 'ID', key: 'id' },
  { label: 'Name', key: 'name' },
  { label: 'Age', key: 'age' }
];

// Create DataTableComponent instance
const dataTable = new DataTableComponent(data, { columns });

// Render the data table
const tableElement = dataTable.render();
document.body.appendChild(tableElement);
```

## API

### `constructor(data: Array, options: Object)`

Creates a new instance of the DataTableComponent with the provided data and options.

- `data`: An array of objects representing the data to be displayed in the table.
- `options`: An object containing configuration options for the table, including columns definition.

### `render(): HTMLElement`

Renders the data table as an HTML table element based on the provided data and options.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
