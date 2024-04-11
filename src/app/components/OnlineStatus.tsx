'use client';
import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { MdOutlineWifiOff, MdOutlineWifi } from "react-icons/md";
import { useOnlineStatus } from '../utils/hooks/useOnlineStatus';

const OnlineStatus = () => {
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (isOnline) {
      toast.success('Vous êtes connecté à internet', {
        duration: 5000,
        icon: <MdOutlineWifi />
      });
    } else {
        toast.warning('Vous êtes hors-connexion', {
        duration: 5000,
        icon: <MdOutlineWifiOff />
      });
    }
  }, [isOnline]);
  return <Toaster richColors position="bottom-right" expand={false} />;
};

export default OnlineStatus;
