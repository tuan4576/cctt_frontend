



import React, { useState } from 'react';
import { useTheme } from '../../../ThemeContext';
import { Switch } from '@headlessui/react';

const Settings = () => {
  const { theme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">User Settings</h1>
        
        <div className="space-y-6">
          {/* Notifications Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-200 font-medium">Enable Notifications</span>
            <Switch
              checked={notifications}
              onChange={setNotifications}
              className={`${
                notifications ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  notifications ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>

          {/* Newsletter Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-200 font-medium">Subscribe to Newsletter</span>
            <Switch
              checked={newsletter}
              onChange={setNewsletter}
              className={`${
                newsletter ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  newsletter ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>

          {/* Two-Factor Authentication Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-200 font-medium">Two-Factor Authentication</span>
            <Switch
              checked={twoFactor}
              onChange={setTwoFactor}
              className={`${
                twoFactor ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  twoFactor ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>

          {/* Save Button */}
          <div className="pt-6">
            <button
              type="button"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
