// This data model is based off the UI at http://dev.huntermarcks.net/search/
// I'm not sure about the relationship between "time" and "type". It looks like "time"
// is the future time of eligibility subject to conditions (e.g. no conviction within the
// past three years).
//
// Pasted from the UI:
//
// Time: Eligible now
// Type: Eligible 137.225(5)(b)
// Charge: 4759924B - Poss Controlled Sub 2
// Disposition: Convicted
// Convicted: 2/12/1987
// Case: ZA0061902
// Case Balance: None

export interface Record {
  time: string;
  type: string;
  charge: string;
  disposition: string;
  convicted: number;
  case: string;
  caseBalance: string;
}

// These constants are used as the 'type' field in Redux actions.
export const LOAD_SEARCH_RECORDS = 'LOAD_SEARCH_RECORDS';

export interface SearchRecordState {
  records: Record[];
}

interface SearchRecordsAction {
  type: typeof LOAD_SEARCH_RECORDS;
  search_records: Record[];
}

// Add other Action types here like so:
// export type RecordActionTypes = LoadRecordsAction | OtherRecordsAction;
export type SearchRecordsActionType = SearchRecordsAction;
