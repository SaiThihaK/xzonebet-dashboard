// Account-Master
export const pendingMasterApi =
  "api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=master";
export const confirmMasterApi =
  "api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-confirm&form_type=master";
export const completeMasterApi = `api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=complete&form_type=master`;
export const cancelMasterApi = `api/affiliate-register-lists?sortColumn=id&sortDirection=desc&limit=30&status=deposit-rejet&form_type=master`;

// Pending Detail Post
export const pendingDetail =
  "api/affiliate-register-lists/master/deposit-pending/";
export const confirmDetail = `api/affiliate-register-lists/confirm-as-master/`;
// PendingMasterDetail get
export const AccountDetail = `api/affiliate-register-lists/`;

// Become an partner Api
export const become_an_Partner =
  "api/affiliate-register-lists?sortColumn=id&sortDirection=desc&status=pending";
// ChoosingMaster in Become an Partner form for agent
export const chooseMasterApi =
  "api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=master";
export const chooseSuper_masterApi =
  "api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=super_master";
