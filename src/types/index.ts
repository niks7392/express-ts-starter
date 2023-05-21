import protobuf from 'protobufjs'

export type Config ={
    env : number 
}

const ProtobufLoad = protobuf.load
export type Protobuf={
    load : Awaited<ReturnType<typeof  ProtobufLoad>>
}