export const SEARCH_KEY_LIST = [
  {
    label: 'caller_service',
    name: '主调Service',
    operate: 2,
    values: ['caller.collector.Unknown', 'caller.collector.UnknownHTTP'],
    value_type: 0,
  },
  {
    label: 'caller_method',
    name: '主调接口',
    operate: 1,
    values: ['-'],
    value_type: 0,
  },
  {
    label: 'instance',
    name: '主调IP',
    operate: 1,
    values: ['te.15.1.178'],
    value_type: 0,
  },
  {
    label: 'container_name',
    name: '主调容器',
    operate: 1,
    values: ['formal.callee.router'],
    value_type: 0,
  },
  {
    label: 'caller_con_setid',
    name: '主调SetId',
    operate: 1,
    values: ['callee.cn.*'],
    value_type: 0,
  },
  {
    label: 'caller_group',
    name: '主调流量组',
    operate: 1,
    values: ['-'],
    value_type: 0,
  },
  {
    label: 'callee_service',
    name: '被调服务',
    operate: 1,
    values: ['http.callee.unknow'],
    value_type: 0,
  },
  {
    label: 'callee_method',
    name: '被调接口',
    operate: 1,
    values: ['/api/v1/write'],
    value_type: 0,
  },
  {
    label: 'callee_ip',
    name: '被调IP',
    operate: 1,
    values: ['re.146.45.te'],
    value_type: 0,
  },
  {
    label: 'callee_container',
    name: '被调容器',
    operate: 1,
    values: ['formal.callee.router'],
    value_type: 0,
  },
  {
    label: 'callee_con_setid',
    name: '被调SetId',
    operate: 1,
    values: ['callee.cn.*'],
    value_type: 0,
  },
  {
    label: 'env_name',
    name: '用户环境',
    operate: 1,
    values: ['formal'],
    value_type: 0,
  },
  {
    label: 'code',
    name: '返回码',
    operate: 1,
    values: ['err_101'],
    value_type: 0,
  },
  {
    label: 'version',
    name: '版本',
    operate: 1,
    values: ['v0.15.4'],
    value_type: 0,
  },
  {
    label: 'city',
    name: '地域',
    operate: 1,
    values: ['gz'],
    value_type: 0,
  },
  {
    label: 'canary',
    name: '金丝雀',
    operate: 1,
    values: ['-'],
    value_type: 0,
  },
  {
    label: 'user_ext1',
    name: '预留字段1',
    operate: 1,
    values: ['-'],
    value_type: 0,
  },
  {
    label: 'user_ext2',
    name: '预留字段2',
    operate: 1,
    values: ['-'],
    value_type: 0,
  },
  {
    label: 'user_ext3',
    name: '预留字段3',
    operate: 1,
    values: ['-'],
    value_type: 0,
  },
];