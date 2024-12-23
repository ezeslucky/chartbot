import { usePreferenceContext } from "@/context";
import { SettingCard } from "./setting-card";
import { SettingsContainer } from "./settings-container";

export const MemorySettings = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { updatePreferences, preferences } = usePreferenceContext();

  const renderMemory = (memory: string) => {
    return (
      <SettingCard className="justify-center flex flex-col">
        {memory}
      </SettingCard>
    );
  };

  return (
    <SettingsContainer title="Memory">
      {preferences?.memories?.map(renderMemory)}
    </SettingsContainer>
  );
};
