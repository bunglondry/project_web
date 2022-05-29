import { People, BarChartLine, CashCoin, Printer, Gear } from 'react-bootstrap-icons';

const HomeOtherMenus = [
  [{
    icon: <People size={24} color="#A855F7" />,
    label: 'Pelanggan',
    path: '/pelanggan'
  },
  {
    icon: <BarChartLine size={24} color="#F43F5E" />,
    label: 'Laporan',
    path: '/laporan'
  },
  {
    icon: <CashCoin size={24} color="#22C55E" />,
    label: 'Pengeluaran',
    path: '/pengeluaran'
  }],
  [{
    icon: <Printer size={24} color="#0EA5E9" />,
    label: 'Printer',
    path: '/printer'
  },
  {
    icon: <Gear size={24} color="#737373" />,
    label: 'Pengaturan',
    path: '/pengaturan'
  }]
  
]

export default HomeOtherMenus;