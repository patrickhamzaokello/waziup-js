'use strict'
import QuantityKinds from './QuantityKinds.js'

/* Sensing devices list
  Generated from FIESTA IoT ontology with this Jena SPARQL script:
  1 PREFIX qu:<http://purl.org/NET/ssnx/qu/qu#>
  2 PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
  3 PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>
  4 SELECT (strafter(str(?subClass), "#") AS ?quantityKind)
  5 WHERE { ?subClass rdfs:subClassOf* ssn:ActuatorKind. } 
  $ bin/sparql --data=http://ontology.fiesta-iot.eu/ontologyDocs/fiesta-iot.owl --query=./rq --results=TSV
  Reference paper: R. Agarwal, D. Farnandez, T. Elsaleh, A.Gyrard, J. Lanza, L. Sanchez, N. Georgantas, V. Issarny, "Unified IoT Ontology to Enable Interoperability and Federation of Testbeds", 3rd IEEE WF-IoT, pp. 70-75, Reston USA, 12-14 December 2016
*/

const dic = [
{id: "Accelerometer",                     label: "Accelerometer",                    VT: ["Acceleration", "AccelerationInstantaneous"]},
{id: "AirHumidityDevice",                 label: "Air humidity device",              VT: ["AirHumidity"]},
{id: "AirPollutantDevice",                label: "Air pollutant device",             VT: ["AirPollution"]},   
{id: "AirThermometer",                    label: "Air thermometer",                  VT: ["AirTemperature"]},
{id: "AlcoholLevelDevice",                label: "Alcohol level device",             VT: ["AlcoholLevel"]},
{id: "AtmosphericPressureDevice",         label: "Atmospheric pressure device",      VT: ["AtmosphericPressure"]},
{id: "BloodPressureDevice",               label: "Blood pressure device",            VT: ["BloodPressure"]},
{id: "BoardThermometer",                  label: "Board thermometer",                VT: ["BoardTemperature"]},
{id: "BoardVoltageDevice",                label: "Board voltage device",             VT: ["Voltage"]},
{id: "BodyThermometer",                   label: "Body thermometer",                 VT: ["BodyTemperature"]},
{id: "CholesterolDevice",                 label: "Cholesterol device",               VT: ["Cholesterol"]},
{id: "Clock",                             label: "Clock",                            VT: ["Timestamp"]},
{id: "CloudCoverDevice",                  label: "Cloud cover device",               VT: ["CloudCover"]},
{id: "CO2Device",                         label: "CO2 device",                       VT: ["CO2"]}, 
{id: "ConductivityDevice",                label: "Conductivity device",              VT: ["Conductivity"]},
{id: "CODevice",                          label: "CO device",                        VT: ["ChemicalAgentAtmosphericConcentrationCO"]},
{id: "Counter",                           label: "Counter",                          VT: ["Count"]},
{id: "CurrentDevice",                     label: "Current device",                   VT: ["ElectricCurrent"]},
{id: "DeltaDewPointDevice",               label: "Delta dew point device",           VT: ["DewPoint, DewPointTemperature"]},
{id: "DeviceUptimeClock",                 label: "Device uptime clock",              VT: ["DeviceUptime"]},
{id: "DewPointDevice",                    label: "Dew point device",                 VT: ["DewPoint, DewPointTemperature"]},
{id: "DirectionOfArrivalDevice",          label: "Direction of arrival device",      VT: ["DirectionOfArrival"]},
{id: "DistanceNextVehicleDevice",         label: "Distance next vehicle device",     VT: ["DistanceNextVehicle"]},
{id: "DistanceDevice",                    label: "Distance device",                  VT: ["Distance"]},
{id: "DoorStateDevice",                   label: "Door state device",                VT: ["DoorStatus"]},
{id: "DustDevice",                        label: "Dust device",                      VT: ["ChemicalAgentAtmosphericConcentrationDust"]},
{id: "ElectricalDevice",                  label: "Electrical device",                VT: ["ElectricalResistance", "ElectricCharge", "ElectricCurrent", "ElectricField", "ElectricPotential", "ActivePower", "BatteryLevel", "Capacitance", "ReactivePower"]},
{id: "ElectricFieldDevice",               label: "Electric field device",            VT: ["ElectricField"]},
{id: "EnergyMeter",                       label: "Energy meter",                     VT: ["Energy"]},
{id: "FallDetector",                      label: "Fall detector",                    VT: ["Acceleration", "AccelerationInstantaneous"]},
{id: "FrequencyDevice",                   label: "Frequency device",                 VT: ["Frequency"]},
{id: "FuelLevel",                         label: "Fuel level",                       VT: ["FillLevel", "FillLevelGasTank"]},
{id: "FuelConsumptionDevice",             label: "Fuel consumption device",          VT: ["FuelConsumption", "FuelConsumptionInstantaneous", "FuelConsumptionTotal"]},
{id: "GasDetector",                       label: "Gas detector",                     VT: ["ChemicalAgentAtmosphericConcentration", "ChemicalAgentAtmosphericConcentrationAirParticles", "ChemicalAgentAtmosphericConcentrationCO", "ChemicalAgentAtmosphericConcentrationDust", "ChemicalAgentAtmosphericConcentrationNH3", "ChemicalAgentAtmosphericConcentrationNO", "ChemicalAgentAtmosphericConcentrationNO2", "ChemicalAgentAtmosphericConcentrationO3", "ChemicalAgentAtmosphericConcentrationSO2", "ChemicalAgentAtmosphericConcentrationVOC"]},
{id: "GaseousPollutantDevice",            label: "Gaseous pollutant device",         VT: ["AirPollution", "ChemicalAgentConcentration", "ChemicalAgentAtmosphericConcentration", "ChemicalAgentAtmosphericConcentrationAirParticles", "ChemicalAgentAtmosphericConcentrationCO", "ChemicalAgentAtmosphericConcentrationDust", "ChemicalAgentAtmosphericConcentrationNH3", "ChemicalAgentAtmosphericConcentrationNO", "ChemicalAgentAtmosphericConcentrationNO2", "ChemicalAgentAtmosphericConcentrationO3", "ChemicalAgentAtmosphericConcentrationSO2", "ChemicalAgentAtmosphericConcentrationVOC", "AirQuality"]},
{id: "Glucometer",                        label: "Glucometer",                       VT: ["BloodGlucose"]},
{id: "GPSDevice",                         label: "GPS device",                       VT: ["Position"]},
{id: "GyroscopeDevice",                   label: "Gyroscope device",                 VT: ["AngularSpeed", "RotationalSpeed", "Orientation"]},
{id: "HeartBeatDevice",                   label: "Heart beat device",                VT: ["HeartBeat"]},
{id: "HumanPresenceDetector",             label: "Human presence detector",          VT: ["Presence"]},
{id: "HumidityDevice",                    label: "Humidity device",                  VT: ["Humidity", "RelativeHumidity", "SoilHumidity", "AirHumidity"]},
{id: "Hydrophone",                        label: "Hydrophone",                       VT: ["Sound", "SoundPressureLevel", "SoundPressureLevelAmbient"]},
{id: "ImageDevice",                       label: "Image device",                     VT: []},
{id: "LeafWetnessDevice",                 label: "Leaf wetness device",              VT: ["LeafWetness"]},
{id: "LightDevice",                       label: "Light device",                     VT: ["LuminousFlux", "LuminousIntensity", "Illuminance", "WeatherLuminosity"]},
{id: "LoRaInterfaceEnergyMeter",          label: "LoRa interface energy meter",      VT: ["Energy"]},
{id: "Magnetometer",                      label: "Magnetometer",                     VT: ["MagneticField", "MagneticFluxDensity"]},
{id: "MotionDevice",                      label: "Motion device",                    VT: ["Motion", "MotionState", "MotionStateVehicle"]},
{id: "NH3Device",                         label: "NH3 device",                       VT: ["ChemicalAgentAtmosphericConcentrationNH3"]},
{id: "NO2Device",                         label: "NO2 device",                       VT: ["ChemicalAgentAtmosphericConcentrationNO2"]},
{id: "NODevice",                          label: "NO device",                        VT: ["ChemicalAgentAtmosphericConcentrationNO"]},
{id: "O3Device",                          label: "O3 device",                        VT: ["ChemicalAgentAtmosphericConcentrationO3"]},
{id: "Odometer",                          label: "Odometer",                         VT: ["Mileage", "MileageDistanceToService", "MileageTotal"]},
{id: "OpticalDustDevice",                 label: "Optical dust device",              VT: ["ChemicalAgentAtmosphericConcentrationDust"]},
{id: "OxidationReductionPotentialDevice", label: "Oxidation reduction potential device", VT: ["Voltage"]},
{id: "OxygenDevice",                      label: "Oxygen device",                    VT: ["ChemicalAgentWaterConcentrationO2", "SPO2"]},
{id: "OtherDevice",                       label: "Other device",                     VT: []},
{id: "Pedometer",                         label: "Pedometer",                        VT: ["Speed", "SpeedAverage", "SpeedInstantaneous"]},
{id: "PeopleCountDevice",                 label: "People count device",              VT: ["Count", "CountPeople"]},
{id: "PHDevice",                          label: "PH device",                        VT: ["PH"]},
{id: "PrecipitationDevice",               label: "Precipitation device",             VT: ["Precipitation"]},
{id: "PresenceDetector",                  label: "Presence detector",                VT: ["Count", "Presence", "PresenceStatePeople", "PresenceStateParking"]},
{id: "PressureDevice",                    label: "Pressure device",                  VT: ["Pressure", "AtmosphericPressure"]},
{id: "ProximityDevice",                   label: "Proximity device",                 VT: ["Proximity"]},
{id: "PulseOxymeter",                     label: "Pulse oxymeter",                   VT: ["SPO2"]},
{id: "RadiationParticleDetector",         label: "Radiation particle detector",      VT: ["IonisingRadiation"]},
{id: "RainFallDevice",                    label: "Rain fall device",                 VT: ["RainFall"]},
{id: "RoadSurfaceThermometer",            label: "Road surface thermometer",         VT: ["Temperature", "RoadTemperature"]},
{id: "SaltMeter",                         label: "Salt meter",                       VT: ["Salinity", "Sodium"]},
{id: "Seismometer",                       label: "Seismometer",                      VT: ["Motion"]},
{id: "SkinConductanceDevice",             label: "Skin conductance device",          VT: ["Conductivity"]},
{id: "SmokeDetector",                     label: "Smoke detector",                   VT: ["ChemicalAgentAtmosphericConcentrationAirParticles", "ChemicalAgentAtmosphericConcentrationDust"]},
{id: "SO2Device",                         label: "SO2 device",                       VT: ["ChemicalAgentAtmosphericConcentrationSO2"]},
{id: "SoilHumidityDevice",                label: "Soil humidity device",             VT: ["Humidity", "RelativeHumidity", "SoilHumidity", "SoilMoistureTension"]},
{id: "SoilThermometer",                   label: "Soil thermometer",                 VT: ["Temperature", "SoilTemperature"]},
{id: "SolarRadiationDevice",              label: "Solar radiation device",           VT: ["SolarRadiation"]},
{id: "SoundDevice",                       label: "Sound device",                     VT: ["Sound", "SoundPressureLevel", "SoundPressureLevelAmbient"]},
{id: "SpeedDevice",                       label: "Speed device",                     VT: ["Speed", "SpeedAverage", "SpeedInstantaneous"]},
{id: "SunPositionDirectionDevice",        label: "Sun position direction device",    VT: ["SunPositionDirection"]},
{id: "SunPositionElevationDevice",        label: "Sun position elevation device",    VT: ["SunPositionElevation"]},
{id: "Thermometer",                       label: "Thermometer",                      VT: ["AirTemperature", "BoardTemperature", "BodyTemperature", "BuildingTemperature", "DewPointTemperature", "FoodTemperature", "HouseholdApplianceTemperature", "RoadTemperature", "RoomTemperature", "SoilTemperature", "Temperature", "TemperatureEngine", "TemperatureWasteContainer", "WaterTemperature"]},
{id: "TimeOfArrivalNextVehicleDevice",    label: "Time of arrival next vehicle device", VT: ["TimeOfArrivalNextVehicle"]},
{id: "TimeOfArrivalDevice",               label: "Time of arrival device",           VT: ["TimeOfArrival"]},
{id: "TouchDevice",                       label: "Touch device",                     VT: ["SkinConductance", "Capacitance"]},
{id: "UltrasonicDevice",                  label: "Ultrasonic device",                VT: ["Sound", "SoundPressureLevel", "SoundPressureLevelAmbient"]},
{id: "VehicleCountDevice",                label: "Vehicle count device",             VT: ["Count", "CountAvailableVehicles", "CountEmptyDockingPoints","TrafficIntensity"]},
{id: "VehiclePresenceDetector",           label: "Vehicle presence detector",        VT: ["Count", "CountAvailableVehicles", "CountEmptyDockingPoints"]},
{id: "VisibilityDevice",                  label: "Visibility device",                VT: ["Visibility"]},
{id: "VOCDevice",                         label: "VOC device",                       VT: ["ChemicalAgentAtmosphericConcentrationVOC"]},
{id: "VoiceCommandDevice",                label: "Voice command device",             VT: ["VoiceCommand"]},
{id: "VoltageDevice",                     label: "Voltage device",                   VT: ["Voltage", "ElectricPotential"]},
{id: "WasteLevelDevice",                  label: "Waste level device",               VT: ["FillLevelWasteContainer"]},
{id: "WaterLevel",                        label: "Water level device",               VT: ["WaterLevel"]},
{id: "WaterConductivityDevice",           label: "Water conductivity device",        VT: ["Conductivity"]},
{id: "WaterNH4IonDevice",                 label: "Water NH4 ion device",             VT: ["ChemicalAgentWaterConcentrationNH4Ion"]},
{id: "WaterNO3IonDevice",                 label: "Water NO3 ion device",             VT: ["ChemicalAgentWaterConcentrationNO3Ion"]},
{id: "WaterO2IonDevice",                  label: "Water O2 ion device",              VT: ["ChemicalAgentWaterConcentrationO2"]},
{id: "WaterPHDevice",                     label: "Water PH device",                  VT: ["PH"]},
{id: "WaterPollutantDevice",              label: "Water pollutant device",           VT: ["ChemicalAgentWaterConcentration"]},
{id: "WaterThermometer",                  label: "Water thermometer",                VT: ["Temperature", "WaterTemperature"]},
{id: "WeightDevice",                      label: "Weight device",                    VT: ["Weight", "Mass"]},
{id: "WiFiInterfaceEnergyMeter",          label: "WiFi interface energy meter",      VT: ["Energy"]},
{id: "WindChillDevice",                   label: "Wind chill device",                VT: ["WindChill"]},
{id: "WindDirectionDevice",               label: "Wind direction device",            VT: ["WindDirection"]},
{id: "WindSpeedDevice",                   label: "Wind speed device",                VT: ["WindSpeed"]}
]

function getAll() {
  return dic
}

function getLabel(id) {
  const sds = dic.find(sd => sd.id == id)
  return sds? sds.label: ""
}

function getVTs(id) {
  const sds = dic.find(sd => sd.id == id)
  return sds? sds.VT.map(qkid => QuantityKinds.getQK(qkid)): []
}


var exports = {getAll, getLabel, getVTs}
export default exports 

