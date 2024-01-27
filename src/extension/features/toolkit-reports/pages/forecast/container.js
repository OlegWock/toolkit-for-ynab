import { withReportContext } from 'toolkit/extension/features/toolkit-reports/common/components/report-context';
import { ForecastComponent } from './component';

function mapReportContextToProps(context) {
  return {
    filteredTransactions: context.filteredTransactions,
    allReportableTransactions: context.allReportableTransactions,
    filters: context.filters,
  };
}

export const Forecast = withReportContext(mapReportContextToProps)(ForecastComponent);
