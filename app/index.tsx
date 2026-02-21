import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    { id: '1', name: 'Supao', price: 'P350' },
    { id: '2', name: 'Udon (6pcs)', price: 'P280' },
    { id: '3', name: 'BatS Soup', price: 'P220' },
  ];

  const handleClose = () => {
    setShowModal(false);
    Alert.alert("Order Received", "Sending to the kitchen!");
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Dragon Dynasty 🏮</Text>
        
        {}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/images/dragon.png')}
            style={styles.image}
          />
        </View>

        <SearchBar />

        <Text style={styles.sectionLabel}>Chef's Recommendations</Text>
        
        <FlatList 
          data={menuItems}
          keyExtractor={(item) => item.id}
          scrollEnabled={false} 
          renderItem={({ item }) => (
            <View style={styles.dishCard}>
              <View style={styles.dishInfo}>
                <Text style={styles.idLabel}>id '{item.id}</Text>
                <Text style={styles.dishName}>{item.name}</Text>
              </View>
              <Text style={styles.dishPrice}>{item.price}</Text>
            </View>
          )}
        />

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => router.push('/orders')}>
            <Text style={styles.btnText}>View Full Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn} onPress={() => setShowModal(true)}>
            <Text style={styles.btnText}>Show Modal</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={showModal} animationType="fade" transparent={true}>
          <View style={styles.overlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Modal Details</Text>
              <Text style={styles.modalBody}>No MSG, extra onion. Sending to kitchen...</Text>
              <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
                <Text style={styles.btnText}>Confirm & Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#1A0D0D' },
  container: { padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#F3C677', textAlign: 'center', marginBottom: 20 },
  
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  smallSquareImage: {
    width: 280, 
    height: 280,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#F3C677',
  },

  sectionLabel: { fontSize: 18, color: '#E87461', marginBottom: 15, fontWeight: '600' },
  dishCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3D2525'
  },
  dishInfo: { flexDirection: 'row', alignItems: 'center' },
  idLabel: { color: '#8E7373', marginRight: 12, fontSize: 13 },
  dishName: { color: '#FFF', fontSize: 16 },
  dishPrice: { color: '#F3C677', fontSize: 16, fontWeight: 'bold' },

  buttonGroup: { marginTop: 20 },
  primaryBtn: { backgroundColor: '#E87461', padding: 16, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  secondaryBtn: { backgroundColor: '#3D2525', padding: 16, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: '#E87461' },
  btnText: { color: '#FFF', fontWeight: 'bold' },

  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.85)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: '80%', backgroundColor: '#2D1B1B', padding: 25, borderRadius: 15, borderWidth: 1, borderColor: '#F3C677' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#F3C677', marginBottom: 10 },
  modalBody: { color: '#FFF', marginBottom: 20 },
  closeBtn: { backgroundColor: '#E87461', padding: 12, borderRadius: 8, alignItems: 'center' }
});

export default Home;