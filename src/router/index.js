import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import Welcome from '@/components/home/Welcome'
// import MainTable from '@/components/home/MainTable'
import CompList from '@/components/baseInfo/CompList'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'
import UserList from '@/components/baseUser/UserList'
import UserAdd from '@/components/baseUser/UserAdd'
import UserEdit from '@/components/baseUser/UserEdit'
import DevtypeList from '@/components/baseDevtype/DevtypeList'
import DevtypeAdd from '@/components/baseDevtype/DevtypeAdd'
import DevtypeEdit from '@/components/baseDevtype/DevtypeEdit'
import DeviceList from '@/components/baseDevice/DeviceList'
import DeviceAdd from '@/components/baseDevice/DeviceAdd'
import DeviceEdit from '@/components/baseDevice/DeviceEdit'
import login from '@/components/home/login'
import FlowList from '@/components/baseFlow/FlowList'
import FlowAdd from '@/components/baseFlow/FlowAdd'
import FlowEdit from '@/components/baseFlow/FlowEdit'
import RepairList from '@/components/produceRepair/RepairList'
import RepairAdd from '@/components/produceRepair/RepairAdd'
import RepairEdit from '@/components/produceRepair/RepairEdit'
import FaultList from '@/components/produceFault/FaultList'
import FaultAdd from '@/components/produceFault/FaultAdd'
import FaultEdit from '@/components/produceFault/FaultEdit'
import ReportList from '@/components/produceReport/ReportList'
import ReportAdd from '@/components/produceReport/ReportAdd'
import ReportEdit from '@/components/produceReport/ReportEdit'
import Control from '@/components/energyConsume/Control'
import JobList from '@/components/produceJob/JobList'
import JobAdd from '@/components/produceJob/JobAdd'
import JobEdit from '@/components/produceJob/JobEdit'
import reports from '@/components/reports/reports'
import reports1 from '@/components/reports/reports1'
import EnergyModel from '@/components/reports/EnergyModel'
import Devinfo from '@/components/reports/Devinfo'
import Devinfo2 from '@/components/reports/Devinfo2'
import DevinfoList from '@/components/reports/DevinfoList'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
			{path:'/login',component:login,name:'login'},
    {
      path: '/',name: 'Index',component: Index,
			children:[
					{path:'/',component:Welcome},
					{path:'CompList',component:CompList,name:'CompList'},
					{path:'CompAdd',component:CompAdd},
					{path:'CompEdit',component:CompEdit,name:'CompEdit'},
					// {path:'MainTable',component:MainTable},
					{path:'UserList',component:UserList,name:'UserList'},
					{path:'UserAdd',component:UserAdd},
					{path:'UserEdit',component:UserEdit,name:'UserEdit'},
					{path:'DevtypeList',component:DevtypeList,name:'DevtypeList'},
					{path:'DevtypeAdd',component:DevtypeAdd},
					{path:'DevtypeEdit',component:DevtypeEdit,name:'DevtypeEdit'},
					{path:'DeviceList',component:DeviceList,name:'DeviceList'},
					{path:'DeviceAdd',component:DeviceAdd},
					{path:'DeviceEdit',component:DeviceEdit,name:'DeviceEdit'},
					{path:'FlowList',component:FlowList,name:'FlowList'},
					{path:'FlowAdd',component:FlowAdd},
					{path:'FlowEdit',component:FlowEdit,name:'FlowEdit'},
					{path:'DeviceEdit',component:DeviceEdit,name:'DeviceEdit'},
					{path:'RepairList',component:RepairList,name:'RepairList'},
					{path:'RepairAdd',component:RepairAdd},
					{path:'RepairEdit',component:RepairEdit,name:'RepairEdit'},
					{path:'FaultList',component:FaultList,name:'FaultList'},
					{path:'FaultAdd',component:FaultAdd},
					{path:'FaultEdit',component:FaultEdit,name:'FaultEdit'},
					{path:'ReportList',component:ReportList,name:'ReportList'},
					{path:'ReportAdd',component:ReportAdd},
					{path:'ReportEdit',component:ReportEdit,name:'ReportEdit'},
					{path:'Control',component:Control,name:'Control'},
					{path:'JobList',component:JobList,name:'JobList'},
					{path:'JobAdd',component:JobAdd},
					{path:'JobEdit',component:JobEdit,name:'JobEdit'},
					{path:'reports',component:reports,name:'reports'},
					{path:'reports1',component:reports1,name:'reports1'},
					{path:'EnergyModel',component:EnergyModel,name:'EnergyModel'},
					{path:'Devinfo',component:Devinfo,name:'Devinfo'},
					{path:'Devinfo2',component:Devinfo2,name:'Devinfo2'},
					{path:'DevinfoList',component:DevinfoList,name:'DevinfoList'},
			]
    }
		
		
  ]
})
