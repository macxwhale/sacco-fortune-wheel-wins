
import React from 'react';
import { WebhookSettings } from '@/components/admin/WebhookSettings';
import { ApiManagement } from '@/components/admin/integrations/ApiManagement';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const CrmIntegrationPlaceholder: React.FC = () => (
    <Card>
        <CardHeader>
            <CardTitle>CRM Integration</CardTitle>
            <CardDescription>Connect to your favorite CRM.</CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">CRM integrations are coming soon.</p>
        </CardContent>
    </Card>
);

export const IntegrationsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Integrations</h2>
      <p className="text-muted-foreground">
        Connect your organization to other services and automate your workflows.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WebhookSettings />
        <ApiManagement />
        <CrmIntegrationPlaceholder />
      </div>
    </div>
  );
};

export default IntegrationsTab;
