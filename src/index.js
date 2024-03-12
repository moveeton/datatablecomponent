// data-table-component.js

class DataTableComponent {
    constructor(data, options = {}) {
      this.data = data;
      this.options = options;
    }
  
    render() {
      const table = document.createElement('table');
      table.classList.add('data-table');
  
      // Add table headers
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      for (const column of this.options.columns) {
        const th = document.createElement('th');
        th.textContent = column.label;
        headerRow.appendChild(th);
      }
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      // Add table body with data rows
      const tbody = document.createElement('tbody');
      for (const item of this.data) {
        const row = document.createElement('tr');
        for (const column of this.options.columns) {
          const td = document.createElement('td');
          td.textContent = item[column.key];
          row.appendChild(td);
        }
        tbody.appendChild(row);
      }
      table.appendChild(tbody);
  
      return table;
    }
  }
  
  module.exports = DataTableComponent;
  