import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Text from '../Text/Text'; // Adjust as needed for your text component
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import AntDesign icons

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section with Image */}
      <View style={styles.header}>
        <Image
          source={require('../assets/lab_image.png')}
          style={styles.headerImage}
        />
      </View>

      {/* Button Grid */}
      <View style={styles.grid}>
        {/* Lab Mitra Button */}
        <TouchableOpacity
          style={styles.gridItemRed}
          onPress={() => navigation.navigate('LabMitra')} // Navigate to Lab Mitra screen
        >
          <AntDesign name="hearto" size={30} color="white" style={styles.gridItemIcon} />
          <Text style={styles.gridItemText}>Lab Mitra</Text>
        </TouchableOpacity>

        {/* Lab Reports Button */}
        <TouchableOpacity
          style={styles.gridItemBlue}
          onPress={() => navigation.navigate('LabReports')} // Navigate to Lab Reports screen
        >
          <AntDesign name="filetext1" size={30} color="white" style={styles.gridItemIcon} />
          <Text style={styles.gridItemText}>Lab Reports</Text>
        </TouchableOpacity>

        {/* ABHA ID Button */}
        <TouchableOpacity
          style={styles.gridItemBlue}
          onPress={() => navigation.navigate('AbhaID')} // Navigate to ABHA ID screen
        >
          <AntDesign name="idcard" size={30} color="white" style={styles.gridItemIcon} />
          <Text style={styles.gridItemText}>ABHA ID</Text>
        </TouchableOpacity>

        {/* TB EP Button */}
        <TouchableOpacity
          style={styles.gridItemBlue}
          onPress={() => navigation.navigate('TbEp')} // Navigate to TB EP screen
        >
          <AntDesign name="medicinebox" size={30} color="white" style={styles.gridItemIcon} />
          <Text style={styles.gridItemText}>TB EP</Text>
        </TouchableOpacity>

        {/* Additional TB EP Button */}
        <TouchableOpacity style={styles.gridItemBlue}>
          <AntDesign name="medicinebox" size={30} color="white" style={styles.gridItemIcon} />
          <Text style={styles.gridItemText}>TB EP</Text>
        </TouchableOpacity>

        {/* Additional TB EP Button */}
        <TouchableOpacity style={styles.gridItemBlue}>
          <AntDesign name="medicinebox" size={30} color="white" style={styles.gridItemIcon} />
          <Text style={styles.gridItemText}>TB EP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  grid: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItemRed: {
    backgroundColor: '#F28B81', // Red color
    width: '47%',
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  gridItemBlue: {
    backgroundColor: '#AECBFA', // Blue color
    width: '47%',
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  gridItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5, // Add margin to separate text from icon
  },
  gridItemIcon: {
    // Optional: Add styles for icons if needed
  },
});
